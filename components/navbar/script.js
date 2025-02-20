$(document).ready(function () {
    // Desktop Sidebar Toggle
    $(".menu > ul > li > a").click(function (e) {
        e.preventDefault(); // Prevents navigation

        let $parentLi = $(this).parent("li"); // Get parent <li>
        $parentLi.siblings().removeClass("active").find(".sub-menu").slideUp(); // Close others
        $parentLi.toggleClass("active");
        $parentLi.find(".sub-menu").slideToggle(); // Toggle submenu
    });

    // Mobile Sidebar Toggle
    $(".menu-btn").click(function () {
        if ($(window).width() <= 768) { // Apply only on mobile
            $(".sidebar").toggleClass("active");
            $(".menu").slideToggle();
        } else { 
            // Desktop Sidebar Toggle (if needed)
            $(".sidebar").toggleClass("active");
        }
    });
});
