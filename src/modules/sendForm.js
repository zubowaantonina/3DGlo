const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");

  const showStatus = (status) => {
    const img = document.createElement("img");
    const statusList = {
      load: {
        message: " Загрузка...",
        img: "./images/message/loading.gif",
      },
      error: {
        message: "Ошибка...",
        img: "./images/message/Err.png",
      },
      success: {
        message: "Спасибо! Наш менеджер свяжется с Вами.",
        img: "./images/message/OK.png",
      },
    };

    statusBlock.textContent = statusList[status].message;
    img.src = statusList[status].img;
    img.height = 50;

    statusBlock.append(img, statusBlock.firstChild);
  };

  const validate = (list) => {
    let success = true;
    return success;
  };
  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};
    const formElements = form.querySelectorAll("input");

    showStatus("load");
    form.append(statusBlock);

    const sendData = (data) => {
      return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
    };

    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.input;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          showStatus("success");
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          showStatus("error");
        });
    } else {
      alert("Данные не валидны");
    }
  };
  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста!");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
