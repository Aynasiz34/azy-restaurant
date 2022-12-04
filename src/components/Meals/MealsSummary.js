import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Zeynep'in Mutfağı</h2>
      <p>
        Yerel Aşçılarımızca Seçilmiş Eşsiz Menümüzden Sipariş Verin Soğumadan Size Ulaşsın. Mutfağımız 10:00 ile 23.00 saatleri arasında çalışmaktadır
      </p>
      <p>
        Bütün yemeklerimiz özenle seçilmiş en taze et ve sebzeler ile yöreye özgü pişirilmiştir. memnuniyetiniz her zaman önceliğimizdir. Afiyet Olsun...
      </p>
    </section>
  );
};

export default MealsSummary;
