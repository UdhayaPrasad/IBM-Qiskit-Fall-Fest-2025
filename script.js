
// Activate scrollspy after content load
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('mainNav');
  if (nav) {
    const bsScrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 90
    });
  }
});
