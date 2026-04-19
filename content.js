const adElements = document.querySelectorAll('[id*="ad"], [class*="ad"]')

adElements.forEach(el => el.remove())