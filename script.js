document.addEventListener('DOMContentLoaded', function() {
  const copyBtn = document.querySelector('.copy-link-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      const link = window.location.href;
      navigator.clipboard.writeText(link).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy Link';
        }, 1500);
      });
    });
  }
    // Hide landing overlay after 5 seconds
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        const overlay = document.getElementById('landing-overlay');
        if (overlay) {
          overlay.style.opacity = '0';
          overlay.style.pointerEvents = 'none';
          setTimeout(() => overlay.style.display = 'none', 200); // Wait for fade out
        }
      }, 5000);
      // Set dynamic name and title
      const profileName = ""; // غير الاسم هنا
      const profileTitle = ""; // غير الوظيفة هنا
      document.getElementById('profile-name').textContent = profileName;
      document.getElementById('profile-title').textContent = profileTitle;
    });
  // --- Profiles data ---
  const profiles = {
    1: { name: "Ahmed Elkady", title: "CEO" },
    2: { name: "Nader Roshdy", title: "COO" },
    3: { name: "Dr. Ahmed Elsaadany", title: "Managing Director" },
    4: { name: "Eng. Ibrahim Hamdy", title: "Operations Manager" },
    5: { name: "Mohamed Ibrahim", title: "Technical Manager" },
    // يمكنك إضافة المزيد هنا
  };

  // --- Contact VCF mapping ---
  const vcfFiles = {
    1: "AhmedElkady.vcf",
    2: "naderroushdy.vcf",
    3: "ahmedelsaadany.vcf",
    4: "ibrahimhamdy.vcf",
    5: "mohamedibrahim.vcf"
  };

  function updateProfile(id) {
    if (profiles[id]) {
      document.getElementById('profile-name').textContent = profiles[id].name;
      document.getElementById('profile-title').textContent = profiles[id].title;
      document.title = profiles[id].name + ' | ' + profiles[id].title;
    }
    // Update contact link
    var contactLink = document.getElementById('contact-link');
    if (contactLink && vcfFiles[id]) {
      contactLink.href = vcfFiles[id];
    }
  }

  // عند تحميل الصفحة، استخدم القيمة الافتراضية
  const input = document.getElementById('profile-id');
  if (input) {
    updateProfile(input.value);
    input.addEventListener('change', function() {
      updateProfile(this.value);
    });
  }
}); 