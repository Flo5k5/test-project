import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { BrokenImage, Image, Title3 } from '../atoms';
import { maxWidthDevice } from '../theme';

export const ArticleText = styled.article``;

export const ArticleImage = styled.div``;

interface ArticleContainerProps {
  hasImage?: boolean;
}

export const ArticleContainer = styled.div<ArticleContainerProps>`
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

export const Article: FC<ArticleProps> = ({ children, title, imageSource }) => {
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
            <Image
              alt={title}
              fullWidth
              fullHeight
              src={imageSource}
              loading='lazy'
              onError={onImageError}
            />
          )}
          {isImageBroken && <BrokenImage />}
        </ArticleImage>
      )}
    </ArticleContainer>
  );
};
