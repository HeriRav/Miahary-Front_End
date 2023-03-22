export default function Footer() {
    return (
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>
              Copyright © Mihary'ket {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </footer>
    );
  }