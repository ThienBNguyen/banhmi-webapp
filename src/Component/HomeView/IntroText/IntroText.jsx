import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
export default function IntroText() {
  return (
    <div class="intro">
      <h1 className="intro-welcome">Welcome to</h1>
      <h1 className="intro-header">
        Bánh Mì Cô Vui{' '}
        <span class="typed-words">
          {' '}
          <Typewriter
            className="intro-header"
            options={{
              strings: ['Austin, TX'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
      <div className="divider"></div>
      <p>
        Chúng tôi luôn nổ lực hướng đến được việc sẽ luôn tạo ra những chiếc
        bánh mì ngon nhất với những thành phần nguyên liệu tươi ngon, cũng như
        nắm bắt được hương vị truyền thống với tiêu chuẩn an toàn thực phẩm cao
        nhất.
      </p>
      <p>
        Đây thật sự là một món ăn NGON và BỔ DƯỠNG, quá hoàn hảo trong việc đi
        lại. Chúng tôi đã cẩn thận tỉ mỉ tạo nên những loại bánh mì để phù hợp
        với từng khẩu vị tất cả mọi người. Hãy thưởng thức cùng chúng tôi ngay
        hôm nay nhé!
      </p>
      <p>
        Bánh mì là một món ăn vội nhưng phải chắt chiu trong từng khâu chuẩn bị.
        Phải cẩn thận đặt vào bên trong từng lát dưa, lát ớt, từng miếng thịt,
        từng cọng ngò. Bánh mì không chỉ để bán cho khách, mà cũng còn dành cho
        chính gia đình của mình. Với bánh mì Cô Vui, một ổ bánh mì ngon là không
        đủ, mà phải là một ổ bánh ngon, chất lượng và đảm bảo vệ sinh!
      </p>
      <div className="intro-button">
        <button>OUR LOCATIONS</button>
        <button>VIEW MENU</button>
      </div>
    </div>
  );
}
