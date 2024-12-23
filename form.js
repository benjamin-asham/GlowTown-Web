// بعد تحميل الصفحة، نضيف التحقق من الحقول
document.addEventListener('DOMContentLoaded', function () {
    // عند محاولة إرسال النموذج
    document.getElementById('signupForm').addEventListener('submit', function (event) {
        // الحصول على القيم المدخلة في الحقول
        let email = document.getElementById('inputEmail4').value;
        let password = document.getElementById('inputPassword4').value;
        let address = document.getElementById('inputAddress').value;
        let city = document.getElementById('inputCity').value;
        let phone = document.getElementById('inputPhone').value;
        let zip = document.getElementById('inputZip').value;

        // التحقق إذا كان هناك أي حقل فارغ
        if (!email || !password || !address || !city || !phone || !zip) {
            // إذا كان هناك حقل فارغ، منع إرسال النموذج
            alert('Your all input not compleated | لم تكتمل جميع بياناتك ');
            event.preventDefault(); // منع إرسال النموذج
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signinForm'); // تحديد النموذج
    const emailInput = document.getElementById('emailInput'); // تحديد حقل البريد الإلكتروني
    const passwordInput = document.getElementById('passwordInput'); // تحديد حقل كلمة المرور

    if (signinForm) {
        signinForm.addEventListener('submit', function (event) {
            // التحقق من الحقول
            let email = emailInput.value;
            let password = passwordInput.value;

            // التحقق إذا كانت الحقول فارغة
            if (!email || !password) {
                alert('Your all input not compleated | لم تكتمل جميع بياناتك ')
                event.preventDefault();  // منع إرسال النموذج إذا كانت الحقول فارغة
            }
        });
    }
});

