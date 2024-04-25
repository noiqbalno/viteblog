const CommentInput = () => {
  return (
    <form className="form-horizontal mb-4">
      <div
        className="input-group input-group-sm mb-0"
        data-toggle="modal"
        data-target="#commentCreateModalForm"
      >
        <input
          className="form-control form-control-sm"
          placeholder="Write Comment.."
        />
        <div className="input-group-append">
          <button type="button" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentInput;
