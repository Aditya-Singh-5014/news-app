import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ArticleCard.css";
import ArticleModal from "./ArticleModal";

const ArticleCard = ({ article }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="article-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsModalOpen(true)}
      >
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} />
        )}
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </motion.div>
      {isModalOpen && (
        <ArticleModal article={article} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ArticleCard;
