import styled, { css } from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 36px;
  height: 100%;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background-image: url('/images/bgi-1.png'), url('/images/Logo-76x22.png');
  background-position: top 28px right 36px, top 20px left 20px;
  background-repeat: no-repeat, no-repeat;
  color: #ebd8ff;

  &::after {
    content: '';
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 10px;
    transform: translateY(-50%);
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const AvatarBox = styled.div`
  z-index: 1;
  display: flex;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  background-color: #5736a3;
  border-radius: 50%;
`;

export const UserInfoBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 26px;
`;

export const TweetsNumber = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
`;

export const FollowersNumber = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
`;

// const rotate180 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(180deg);
//   }
// `;

export const Button = styled.button`
  position: relative; /* добавляем позиционирование */
  padding: 14px;
  width: 196px;
  height: 50px; /* задаем фиксированную высоту */
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-style: none;
  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5CD3A8' : '#EBD8FF'};
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  ${({ isFollowing }) =>
    isFollowing &&
    css`
      transform: rotateY(180deg);
      &::before {
        transform: rotateY(180deg); /* поворачиваем текст */
        transform-origin: right center; /* меняем точку поворота */
      }
    `}
`;

export const ButtonText = styled.span`
  transform: ${({ isFollowing }) =>
    isFollowing ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
  display: inline-block;
  width: 100%;
  text-align: center;

  &::before {
    /* добавляем псевдоэлемент для текста */
    content: '';
    position: absolute; /* позиционируем элемент */
    top: 50%; /* сдвигаем вниз на половину высоты */
    transform: translateY(-50%); /* выравниваем по вертикали */
    left: 50%; /* сдвигаем вправо на половину ширины */
    transform-origin: left center; /* задаем точку поворота */
    transform-style: preserve-3d; /* сохраняем 3D-эффект */
    transition: transform 0.3s ease-in-out; /* добавляем анимацию поворота */
  }
`;
