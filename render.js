const hide = document.querySelector(".whole_wrapper");
const body = document.body;
export function renderPopUp(title, subtitle, button) {
  const mainDiv = document.createElement("div");
  //header span
  const headerDiv = document.createElement("div");
  const spanHeader = document.createElement("span");
  const buttonClose = document.createElement("button");
  const imageButton = document.createElement("img");

  //subtitle
  const subTitleDiv = document.createElement("div");
  subTitleDiv.classList.add("subtitle");
  subTitleDiv.textContent = subtitle;

  //form
  const formName = document.createElement("form");
  const inputInForm = document.createElement("input");
  const inputButton = document.createElement("button");
  const inputButtonImage = document.createElement("img");
  inputButtonImage.src = "./assets/icons8-macos-close-30.png";
  inputButton.appendChild(inputButtonImage);
  formName.classList.add("form_input");
  formName.appendChild(inputInForm);
  formName.appendChild(inputButton);

  imageButton.src = "./assets/icons8-macos-close-30.png";
  spanHeader.textContent = title;

  mainDiv.classList.add("popup");
  headerDiv.classList.add("popup_header");

  //header
  buttonClose.appendChild(imageButton);
  headerDiv.appendChild(spanHeader);
  headerDiv.appendChild(buttonClose);
  hide.style.display = "none";
  mainDiv.appendChild(headerDiv);
  mainDiv.appendChild(subTitleDiv);
  mainDiv.appendChild(formName);
  body.appendChild(mainDiv);
  buttonClose.addEventListener("click", closePopUp);
}

function closePopUp(event) {
  body.removeChild(event.path[3]);
  hide.style.display = "block";
}
//  <div class='popup'>
//    <div class='popup_header'>
//      <span>Настройки</span>
//      <button>
//        <i>
//          <svg
//            width='18'
//            height='18'
//            viewBox='0 0 18 18'
//            fill='none'
//            xmlns='http://www.w3.org/2000/svg'
//          >
//            <path
//              opacity='0.45'
//              d='M12.4653 3.53246L13.9071 4.9743L5.63731 13.2441L4.19547 11.8023L12.4653 3.53246ZM5.5793 3.37502L14.3629 12.1586L12.8299 13.6916L4.04632 4.90801L5.5793 3.37502Z'
//              fill='black'
//            />
//          </svg>
//        </i>
//      </button>
//    </div>
//    <div class='subtitle'>Имя в чате</div>
//    <form class='form_input'>
//      <input type='text' placeholder='Стив...' />
//      <button>
//        <i>
//          <svg
//            width='13'
//            height='8'
//            viewBox='0 0 13 8'
//            fill='none'
//            xmlns='http://www.w3.org/2000/svg'
//          >
//            <path
//              d='M4.10156 4.75781H0.289062V3.57812H4.10156V4.75781ZM10.6328 3.92188L5.46875 1.89844V0.414062L12.1406 3.36719V4.50781L5.46875 7.46875V5.96875L10.6328 3.92188Z'
//              fill='black'
//            />
//          </svg>
//        </i>
//      </button>
//    </form>
//  </div>;
