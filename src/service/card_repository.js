import { getDatabase, ref, onValue, set, remove, off } from "firebase/database";

class CardRepository {
  constructor() {
    this.db = getDatabase();
  }
  asyncCard(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }
  deleteCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`), card);
  }
}

export default CardRepository;
