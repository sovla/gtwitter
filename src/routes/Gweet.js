import { dbService, storageService } from "fbase";
import { useState } from "react";

const Gweet = ({ gweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newGweet, setNewGweet] = useState(gweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("삭제 하시겠습니까?");
    if (ok) {
      await dbService.doc(`gweet/${gweetObj.id}`).delete();
      if (gweetObj.attachmentUrl !== "") {
        await storageService.refFromURL(gweetObj.attachmentUrl).delete();
      }
    }
  };

  const toggleEditClick = () => {
    setEditing((prev) => !prev);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewGweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`gweet/${gweetObj.id}`).update({ text: newGweet });
    setEditing(false);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input value={newGweet} onChange={onChange} required />
          </form>
          <button onClick={toggleEditClick}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{gweetObj.text}</h4>
          {gweetObj.attachmentUrl && (
            <img src={gweetObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Gweet</button>
              <button onClick={toggleEditClick}>Edit Gweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Gweet;
