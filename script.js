(function() {
  // --- Profiles data ---
  const profiles = {
    1: { name: "Ahmed Elkady", title: "CEO" },
    2: { name: "Nader Roshdy", title: "COO" },
    3: { name: "Dr. Ahmed Elsaadany", title: "Managing Director" },
    4: { name: "Eng. Ibrahim Hamdy", title: "Operations Manager" },
    5: { name: "Mohamed Ibrahim", title: "Technical Manager" }
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
    const nameEl = document.getElementById('profile-name');
    const titleEl = document.getElementById('profile-title');
    const contactLink = document.getElementById('contact-link');
    if (!nameEl || !titleEl || !contactLink) return;
    const profile = profiles[id];
    if (profile) {
      nameEl.textContent = profile.name;
      titleEl.textContent = profile.title;
      document.title = `${profile.name} | ${profile.title}`;
      if (vcfFiles[id]) {
        contactLink.href = vcfFiles[id];
      } else {
        contactLink.href = '#';
      }
    } else {
      nameEl.textContent = '';
      titleEl.textContent = '';
      document.title = 'MedYour';
      contactLink.href = '#';
    }
  }

  function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  window.addEventListener('DOMContentLoaded', function() {
    // Hide landing overlay after 5 seconds
    setTimeout(function() {
      const overlay = document.getElementById('landing-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        setTimeout(() => overlay.style.display = 'none', 200);
      }
    }, 5000);

    // Set profile based on URL id
    const urlId = getIdFromUrl();
    if (urlId && profiles.hasOwnProperty(urlId)) {
      updateProfile(urlId);
    } else {
      updateProfile(1); // Default profile
    }
  });
})(); 