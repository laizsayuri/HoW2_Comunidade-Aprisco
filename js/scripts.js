window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: 74,
      });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
      elements: "#portfolio a.portfolio-box",
    });
  });


$("#form").submit(function (e) {
    e.preventDefault();
    $("#error-message").hide();
    $("#success-message").hide();

    var name = $("#inputName").val();
    var email = $("#inputEmail").val();
    var phone = $("#inputPhone").val();
    var message = $("#inputMessage").val();

    if (!validText(name)) {
      setErrorMessage("Insira um nome válido!");
      return;
    }

    if (!isEmail(email)) {
      setErrorMessage("Insira um email válido!");
      return;
    }

    if (!isPhone(phone)) {
      setErrorMessage("Insira um telefone válido");
      return;
    }

    if (!validText(message)) {
      setErrorMessage("Insira uma menssagem válida!");
      return;
    }

    setSuccessMessage("Mensagem enviada!");
    var name = $("#inputName").val("");
    var email = $("#inputEmail").val("");
    var phone = $("#inputPhone").val("");
    var message = $("#inputMessage").val("");
  });

function setErrorMessage(message) {
  $("#error-message").text(message);
  $("#error-message").show();
}

function setSuccessMessage(message) {
  $("#success-message").text(message);
  $("#success-message").show();
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isPhone(phone) {
  var regex = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
  return regex.test(phone);
}

function validText(text) {
  return (
    text != null && text != undefined && text.length > 0 && text.trim() != ""
  );
}
