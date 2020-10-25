function convertToRoman(num) {
 let roman = '';

  roman +=  'M'.repeat(num / 1000);  num %= 1000; 
  roman += 'CM'.repeat(num / 900);   num %= 900; 
  roman +=  'D'.repeat(num / 500);   num %= 500;  
  roman += 'CD'.repeat(num / 400);   num %= 400;
  roman +=  'C'.repeat(num / 100);   num %= 100;
  roman += 'XC'.repeat(num / 90);    num %= 90;
  roman +=  'L'.repeat(num / 50);    num %= 50;
  roman += 'XL'.repeat(num / 40);    num %= 40;
  roman +=  'X'.repeat(num / 10);    num %= 10;
  roman += 'IX'.repeat(num / 9);     num %= 9;
  roman +=  'V'.repeat(num / 5);     num %= 5;
  roman += 'IV'.repeat(num / 4);     num %= 4;
  roman +=  'I'.repeat(num);

  return roman;
}

convertToRoman(36);
