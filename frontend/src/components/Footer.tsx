const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-300 mx-auto">
        <div className="flex gap-20 py-10">
          {/* brand */}
          <div className="border border-border flex-1">
            <h2>Laxim Chit Fund</h2>
          </div>

          {/* links */}
          <div className="flex gap-20">
            <div className="border border-border">
              <h3>heading</h3>
              <p className="text-primary/70">link 1</p>
              <p className="text-primary/70">link 2</p>
              <p className="text-primary/70">link 3</p>
              <p className="text-primary/70">link 4</p>
            </div>
            <div className="border border-border">
              <h3>heading</h3>
              <p className="text-primary/70">link 1</p>
              <p className="text-primary/70">link 2</p>
              <p className="text-primary/70">link 3</p>
              <p className="text-primary/70">link 4</p>
            </div>
            <div className="border border-border">
              <h3>heading</h3>
              <p className="text-primary/70">link 1</p>
              <p className="text-primary/70">link 2</p>
              <p className="text-primary/70">link 3</p>
              <p className="text-primary/70">link 4</p>
            </div>
          </div>
        </div>
        <div className="text-center pb-2">Made with Love by Tushar Ramgirkar</div>
      </div>
    </div>
  );
};

export default Footer;
