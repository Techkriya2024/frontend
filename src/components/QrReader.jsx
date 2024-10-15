import { useEffect, useRef, useState } from "react";
import "./QrReader.css";
import QrScanner from "qr-scanner";
import QrFrame from "../assets/qr-frame.svg";

const QrReader = () => {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);

  const [scannedResult, setScannedResult] = useState("");
  const [eventID, setEventID] = useState(""); 

  const fetchEventData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch event data");
      }
      const data = await response.json();

      if (data?.eventID) {
        setEventID(data.eventID);
      }
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  const onScanSuccess = (result) => {
    console.log("Scanned QR code result:", result);

    result = result?.data;

    if (result.startsWith("http")) {
      setScannedResult(result);
      fetchEventData(result);
    } else {
      console.log("Invalid QR code. Not a URL.");
    }
  };

  const onScanFail = (err) => {
    console.log(err);
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl.current || undefined,
      });

      scanner.current
        .start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    return () => {
      if (!videoEl?.current) {
        scanner.current?.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
  }, [qrOn]);

  const handleProceed = () => {
    if (eventID) {
      console.log(`Proceeding with Event ID: ${eventID}`);
    }
  };

  return (
    <div className="qr-reader">
      <video ref={videoEl}></video>
      <div ref={qrBoxEl} className="qr-box">
        <img
          src={QrFrame}
          alt="Qr Frame"
          width={256}
          height={256}
          className="qr-frame"
        />
      </div>

      {scannedResult && (
        <div style={{ position: "absolute", top: 0, left: 0, zIndex: 99999, color: "white" }}>
          <p>Scanned Result: {scannedResult}</p>

          {eventID && (
            <button
              onClick={handleProceed}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              style={{ zIndex: 100000, position: "relative" }}
            >
              Proceed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QrReader;
