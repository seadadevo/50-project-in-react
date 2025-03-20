import { useEffect, useState } from "react";
import "../keyCode.css";

interface IkeyInfo {
  key: string;
  keyCode: number;
  code: string;
}

const KeyEvent = () => {
  const [keyInfo, setKeyInfo] = useState<IkeyInfo | null>(null);
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      setKeyInfo({
        key: e.key,
        keyCode: e.keyCode,
        code: e.code,
      });
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <div className="container space-y-2">
      <h1>press any key to get info about it</h1>

      {keyInfo && (
        <div>
          <div className="key key-box">
            {keyInfo.key}
            <span>event.key</span>
          </div>
          <div className="keyCode key-box">
            {keyInfo.keyCode}
            <span>event.keyCode</span>
          </div>
          <div className="eventCode key-box">
            {keyInfo.code}
            <span>event.code</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyEvent;
