<template>
  <footer class="footer bg-blue">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-3 mb-4">
          <div class="d-flex">
            <img
              src="@/assets/messi.gif"
              alt="footer-logo"
              class="footer-logo"
              @click="emitEvent"
            />
          </div>
        </div>
        <div class="col-12 col-lg-3 mb-4">
          <div class="footer-links">
            <p class="foot-title">
              روابط تهمك
              <i class="fas fa-user-times"></i>
            </p>
            <div class="links" >
              <a href="index.html" class="act-befor"> <span>الرئيسية</span></a>
              <a href="main-sections.html" class="act-befor">
                <span>رئيسية الطالب</span></a
              >
              <a href="sub-section.html" class="act-befor">
                <span>حجوزاتي</span></a
              >
              <a href="join-us.html" class="act-befor">
                <span>الملف الطالب الشخصي</span></a
              >
              <a href="join-us.html" class="act-befor"> <span>الرسائل</span></a>
              <a href="join-us.html" class="act-befor">
                <span>الاشعارات</span></a
              >
              <a href="join-us.html" class="act-befor">
                <span>من نحن ووصف الخدمه</span></a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 mb-4">
          <div class="footer-links">
            <p class="foot-title red">موقع معلم</p>
            <div class="links">
              <a href="profile.html" class="act-befor">
                <span>رئيسية المعلم</span></a
              >
              <a href="wish-list.html" class="act-befor">
                <span>الملف الشخصي</span></a
              >
              <a href="my-requests.html" class="act-befor">
                <span>المواعيد</span></a
              >
              <a href="invoices.html" class="act-befor">
                <span>الرسائل</span></a
              >
              <a href="login.html" class="act-befor"> <span>الاشعارات</span></a>
              <a href="login.html" class="act-befor">
                <span>الشروط والاحكام</span></a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 mb-4">
          <div class="footer-links without-arrow">
            <p class="foot-title">اتصـل بنا</p>
            <div class="links">
              <p class="act-befor">
                <span>المملكة العربية السعودية - الرياض - </span>
              </p>
              <p class="act-befor"><span>0505143446</span></p>
              <div class="footer-icons">
                <a href="https://web.whatsapp.com" class="icon"
                  ><i class="fab fa-whatsapp"></i
                ></a>
                <a
                  href="https://accounts.snapchat.com/accounts/snapcodes"
                  class="icon"
                  ><i class="fab fa-snapchat-ghost"></i
                ></a>
                <a href="https://www.instagram.com/moallem_sa/" class="icon"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="https://twitter.com/moallem_sa" class="icon"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="https://www.facebook.com/" class="icon"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <div class="inner">
          <p class="right-title">
            جميع الحقوق محفوظة لموقع
            <a href="">معلم</a>
          </p>
          <p class="left-title">
            تصميم وتنفيذ مؤسسة
            <a href="https://aait.sa/" target="_blank"> أوامر الشبكة </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// export default {
//   data() {
//     return {
//       isActive: false, // Initialize as not active
//     };
//   },
//   methods: {
//     toggleAccordion() {
//       const windowWidth = window.innerWidth;
//       if (windowWidth <= 768) {
//         // Toggle the 'active' class and show/hide content
//         this.isActive = !this.isActive;
//         this.closeOtherAccordions();
//         console.log("a7aaa777777777777777")
//       }
//     },
//     closeOtherAccordions() {
//       // Close other accordions if this one is opened
//       if (this.isActive) {
//         const siblings = document.querySelectorAll('.foot-title');
//         siblings.forEach((sibling) => {
//           if (sibling !== this.$el) {
//             sibling.classList.remove('active');
//             const links = sibling.nextElementSibling;
//             if (links) {
//             //   links.style.display = 'none';
            
//             }
//           }
//         });
//       }
//     },
//   },
//   mounted() {
//     // Optionally, you can set up additional logic when the component is mounted
//   },
// };



export default {

  mounted() {
    const handleFootTitleClick = (event) => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        const footTitle = event.target;
        const links = footTitle.nextElementSibling;

        if (footTitle.classList.contains('active')) {
          footTitle.classList.remove('active');
          links.classList.remove('active');
          
        } else {
          const footTitles = document.querySelectorAll('.foot-title');
          footTitles.forEach((title) => {
            title.classList.remove('active');
            links.classList.remove('active');
          });

          const footerLinks = document.querySelectorAll('.footer-links .links');
          footerLinks.forEach((link) => {
            // link.style.display = 'none';
            link.classList.remove('active');
          });

          footTitle.classList.add('active');
          links.classList.add('active');
        //   links.style.display = 'block';
        }
      }
    };

    const footTitles = document.querySelectorAll('.foot-title');
    footTitles.forEach((footTitle) => {
      footTitle.addEventListener('click', handleFootTitleClick);
    });
  }
};
</script>