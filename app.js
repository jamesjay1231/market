function showForm(formId) {
  // 모든 폼을 숨기기
  const forms = document.querySelectorAll(".form");
  forms.forEach((form) => {
    form.style.display = "none";
  });

  // 선택한 폼만 보이기
  document.getElementById(formId).style.display = "block";
}

// 기본적으로 첫 번째 폼을 보이게 하기
document.addEventListener("DOMContentLoaded", () => {
  showForm("buyer-login");
});
