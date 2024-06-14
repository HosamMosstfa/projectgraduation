import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />

        <select name="cat" id="cat" required>
          <option value="general">Choose the age</option>
          <option value="Early Childhood">(0-5 years)</option>
          <option value="Middle Childhood">(6-11 years)</option>
          <option value="Adolescence">(12-18 years)</option>
          <option value="Youth and Adults">(18+ years)</option>
        </select>
        <select name="price" id="price" required>
          <option value="general">Choose the price</option>
          <option value="50">$50</option>
          <option value="70">$70</option>
          <option value="100">$100</option>
          <option value="120">$120</option>
        </select>

        <select name="day" id="day" required>
          <option value="general">Choose the days</option>
          <option value="sat-tues">(sat-tues)for Early Childhood</option>
          <option value="sun-wed">(sun-wed)for Middle Childhood</option>
          <option value="mon-thur">(mon-thur)for Adolescence</option>
          <option value="mon-thur">(mon-thur)for Youth and Adults</option>
        </select>

        <select name="time" id="time" required>
          <option value="general">Choose the time</option>
          <option value="1pm-to-3pm">(1pm-to-3pm)for Early Childhood</option>
          <option value="4pm-to-6pm">(4pm-to-6pm)for Middle Childhood</option>
          <option value="7pm-to-9pm">(7pm-to-9pm)for Adolescence & Youth and Adults</option>
        </select>
        <input type="number" placeholder="phone Number" name="phone" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
