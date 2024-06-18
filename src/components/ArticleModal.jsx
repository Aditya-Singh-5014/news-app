import React from "react";
import { motion } from "framer-motion";
import "../styles/ArticleModal.css";

const ArticleModal = ({ article, onClose }) => {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} />
        )}
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default ArticleModal;
