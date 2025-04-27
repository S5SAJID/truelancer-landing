const ChatButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="gradient-bg aspect-square size-12 hover:opacity-90 text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300">
        <i className="fas fa-comment-dots text-xl"></i>
      </button>
    </div>
  );
};

export default ChatButton;
