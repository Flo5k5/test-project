import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import BrokenImage from '../atoms/BrokenImage';
import Image from '../atoms/Image';
import Title3 from '../atoms/Title3';

import { maxWidthDevice } from '../theme';

const ArticleText = styled.article``;

const ArticleImage = styled.div``;

interface ArticleContainerProps {
  hasImage?: boolean;
}

const ArticleContainer = styled.div<ArticleContainerProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 10px;

  @media ${maxWidthDevice.mobileL} {
    flex-direction: column;
    align-items: center;
  }

  & ${Title3} {
    margin-top: 0;
  }

  ${({ hasImage }) =>
    hasImage &&
    `
        & > ${ArticleText} {
            width: 70%;

            @media ${maxWidthDevice.mobileL} {
              width: 100%;
            }
        }

        & > ${ArticleImage} {
            width: 30%;
        }
  `}
`;

interface ArticleProps {
  children: ReactNode;
  title: string;
  imageSource?: string;
}

const Article: FC<ArticleProps> = ({ children, title, imageSource }) => {
  const [isImageBroken, setIsImageBroken] = useState(false);

  const onImageError = () => {
    setIsImageBroken(true);
  };

  return (
    <ArticleContainer hasImage={!!imageSource}>
      <ArticleText>
        <header>
          <Title3>{title}</Title3>
        </header>
        <section>{children}</section>
      </ArticleText>
      {imageSource && (
        <ArticleImage>
          {!isImageBroken && (
            <Image alt={title} fullWidth src={imageSource} loading='lazy' onError={onImageError} />
          )}
          {isImageBroken && <BrokenImage />}
        </ArticleImage>
      )}
    </ArticleContainer>
  );
};

export default Article;
