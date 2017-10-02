/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
   $(document).ready(function() {
        if ((screen.width>560)) {
            $(".MobileIcons").css('display', 'none');
        }
        else if ((screen.width<=560)) {
            $(".MobileIcons").css('display', 'block');
        }
    });
