function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'Black Modern Professional Resume.pdf'; 
    link.download = 'Elijah_Jorgensen.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   }