import React, { useState } from "react";
import { Input, Button } from "antd";

const OnlineContent: React.FC = () => {
  const [urls, setUrls] = useState<string[]>([""]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const addInputField = () => {
    setUrls([...urls, ""]);
  };

  const removeInputField = (index: number) => {
    const newUrls = [...urls];
    newUrls.splice(index, 1);
    setUrls(newUrls);
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="online-content-container">
      {urls.map((url, index) => (
        <div key={index} className="url-input-container">
          <Input
            type="text"
            value={url}
            onChange={(event) => handleInputChange(event, index)}
            placeholder={`URL ${index + 1}`}
            className="url-input"
          />
          <div className="button-container">
            <Button
              type="primary"
              onClick={() => openInNewTab(url)}
              className="open-button"
            >
              Open
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => removeInputField(index)}
              className="remove-button"
            >
              Remove
            </Button>
          </div>
          {url && (
            <div className="iframe-container">
              {url.includes("youtube.com") ? (
                <iframe
                  width="560"
                  height="315"
                  src={url}
                  title={`YouTube video player ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="iframe"
                ></iframe>
              ) : (
                <iframe
                  src={url}
                  title={`Embedded content ${index + 1}`}
                  width="800"
                  height="600"
                  className="iframe"
                ></iframe>
              )}
            </div>
          )}
        </div>
      ))}
      <Button
        type="primary"
        onClick={addInputField}
        className="add-button"
      >
        Add URL
      </Button>
    </div>
  );
};

export default OnlineContent;
