import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  BaseBody,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, linkUrl } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(linkUrl);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <BaseBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BaseBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
