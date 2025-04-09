module.exports = {
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
  };
  const withMT = require("@material-tailwind/html/utils/withMT");
 
  module.exports = withMT({
    content: ["./index.html"],
    theme: {
      extend: {},
    },
    plugins: [],
  });


const upload = document.getElementById('upload');
const gallery = document.getElementById('gallery');

  upload.addEventListener('change', function () {
    const files = Array.from(this.files);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = e.target.result;

        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = file.name;

        item.appendChild(img);
        item.appendChild(caption);
        gallery.appendChild(item);
      };
      reader.readAsDataURL(file);
    });
  });