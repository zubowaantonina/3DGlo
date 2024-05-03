import { animate } from "./helpers";

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    let count = 0;

    if (mediaQuery.matches) {
        const animatePopup = () => {
            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw() {
                    modal.style.display = 'block';

                    if (count < 100) {
                        modal.style.opacity = count + '%';
                        count += 5;
                    }
                }
            });
        }
        const unPopup = () => {
            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw() {
                    if (count > 0) {
                        modal.style.opacity = count + '%';
                        count -= 5;
                    } else {
                        modal.style.display = 'none';
                    }
                }
            });
        }
        buttons.forEach(btn => {
            btn.addEventListener("click", animatePopup);
        });
        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                unPopup()
            }
        });
    } else {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });
        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                modal.style.display = 'none';
            }
        });
    }
};

export default modal;