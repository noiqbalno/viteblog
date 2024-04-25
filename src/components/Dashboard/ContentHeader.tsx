const ContentHeader = ({ title }: { title: string }) => {
  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="text-capitalize">{title ? title : 'Blank Page'}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">
                {title ? title.substring(0, 20) : 'Blank Page'}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHeader;
