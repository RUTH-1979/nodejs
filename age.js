var age = process.argv[2];

if (age >= 1 && age < 12) {
  console.log('Enfant');
} else if (age >= 12 && age < 18) {
    console.log('adolescent');
} else if (age >= 18 && age < 26) {
    console.log('jeune adulte');
} else {
    console.log('adulte');
}
