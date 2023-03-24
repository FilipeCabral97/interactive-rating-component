import { useRef, useState } from "react";
import styles from "./Rating.module.css";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return isSubmitted ? (
    <div className={styles.thankYouPanel}>
      <img src="/illustration-thank-you.svg" alt="" />
      <p className={styles.selected}>You selected {selectedRating} out of 5</p>

      <h1 className={styles.title}>Thank You!</h1>
      <p className={styles.description}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch.
      </p>
    </div>
  ) : (
    <form onSubmit={handleFormSubmit} className={styles.panel}>
      <img src="/icon-star.svg" className={styles.star} />
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering.
      </p>

      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((rating, index) => (
          <button
            type="button"
            onClick={() => handleRatingClick(rating)}
            className={`${styles.rating} ${
              selectedRating === rating ? styles.selectedRating : ""
            }`}
          >
            {rating}
          </button>
        ))}
      </div>

      <button disabled={selectedRating === undefined} className={styles.submit}>
        SUBMIT
      </button>
    </form>
  );
};

export default Rating;
