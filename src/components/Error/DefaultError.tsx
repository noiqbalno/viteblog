import { IErrorDefault } from '../../interfaces/IErrorDefault';

const DefaultError = (props: IErrorDefault) => {
  const { errorCode, errorMessage } = props;
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>
                {errorCode} {errorMessage}
              </h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">{errorCode} Error</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="error-page">
          <h2 className="headline text-danger">{errorCode}</h2>
          <div className="error-content">
            <h3>
              <i className="fas fa-exclamation-triangle text-danger"></i> Oops!
              Something went wrong.
            </h3>
            <p>
              We will work on fixing that right away. Meanwhile, you may{' '}
              <a href="../../index.html">return to dashboard</a> or try again
              several minutes later.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefaultError;
