import React from 'react';
import { IPhoto } from '../../interfaces/IPhoto';

const PhotoDetailModal = ({ photo }: { photo: IPhoto | null }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-capitalize" id="exampleModalLabel">
              {photo ? photo.title : 'Detail Photo'}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            {photo !== null ? (
              <a
                target="blank"
                href={photo?.url}
                data-toggle="lightbox"
                data-title="sample 1 - white"
                data-gallery="gallery"
              >
                <img
                  src={photo?.thumbnailUrl}
                  className="img-fluid mb-2"
                  alt="white sample"
                />
              </a>
            ) : (
              'Photo not found'
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailModal;
