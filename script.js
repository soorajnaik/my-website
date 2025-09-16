    var modal = document.getElementById("myModal");
      var images = document.querySelectorAll(".myImg");
      var modalImg = document.getElementById("img01");
      var span = document.getElementsByClassName("close")[0];

      images.forEach(function (img, index) {
        img.onclick = function () {
          modal.style.display = "block";
          modalImg.src = this.src;

          // Reset styles to handle resizing
          modalImg.style.width = "auto";
          modalImg.style.height = "auto";

          var aspectRatio = this.naturalWidth / this.naturalHeight;
          var maxWidth = window.innerWidth * 0.8;
          var maxHeight = window.innerHeight * 0.8;

          // Determine whether to limit width or height based on aspect ratio
          if (aspectRatio > 1) {
            modalImg.style.width = maxWidth + "px";
          } else {
            modalImg.style.height = maxHeight + "px";
          }
        };
      });

      // Close the modal when the close button is clicked
      span.onclick = function () {
        modal.style.display = "none";
      };

      // Close the modal when the user clicks outside the modal content
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };


