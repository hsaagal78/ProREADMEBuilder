const { renderLicenseBadge, renderLicenseLink } = require('./generateMarkdown');

describe('renderLicenseBadge', () => {
    it('should return a license badge URL', () => {
        const license = 'MIT';
        const expected = `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
        const result = renderLicenseBadge(license);
        expect(result).toBe(expected);
    });
    it('should return an empty string when license is none', () => {
        const license = 'none';
        const expected = '';
        const result = renderLicenseBadge(license);
        expect(result).toBe(expected); 
    });
});

describe('renderLicenseLink', () => {
    it('Should return a license badge license', () => { 
        const license = 'MIT';
        const expected = `\n* [License]\n`;
        const result = renderLicenseLink(license);
        expect(result).toBe(expected); 
    });
    it('should return an empty string when license is none', () => {
        const license = 'none'; 
        const expected = ' '; 
        const result = renderLicenseLink(license);
        expect(result).toBe(expected); 
      });
    });
        
    
    
    
    
    
    