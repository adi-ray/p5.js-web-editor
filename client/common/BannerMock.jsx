/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import styled from 'styled-components';

const Banner = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  background: white;
  font-size: 1.125rem;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
`;

const DarkSideBar = styled.div`
  width: 30px;
  background: #aa1d47;
`;

const CallToAction = styled.div`
  flex: 2;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;

  h1 {
    font-size: 2.5rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.3rem;
  }

  ul {
    margin: 0.5rem;
    font-size: 1.3rem;
  }
`;

const ChevronWrapper = styled.div`
  width: 90px;
  background: linear-gradient(to bottom, #ed225d 0%, #aa1d47 100%);
  clip-path: polygon(0 0, 100% 0, 30% 50%, 100% 100%, 0 100%);
  z-index: 0;
  transform: rotateY(3.142rad); /* keep flip as intended */
  @media (max-width: 850px) {
    display: none;
  }
`;

const Action = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const IntervalSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f1f5f9;
  border-radius: 6px;
  padding: 0.5rem;
  margin: 0 3rem;
  font-size: 1.2rem;
`;

const Interval = styled.div`
  padding: 0.5rem;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &.active {
    background: white;
  }

  &:hover {
    background: #e2e8f0;
  }
`;

const AmountSelect = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const Amount = styled.div`
  padding: 1rem;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #94a3b8;
  cursor: pointer;
  background: ${({ active }) => (active ? '#f1f5f9' : 'white')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #f1f5f9;
    transform: scale(1.03);
  }
`;

const CustomAmount = styled.input`
  grid-column: span 2;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #94a3b8;
  border-radius: 6px;
`;

const DonateButton = styled.button`
  background: #ed225d;
  color: #fff !important;
  border: none;
  padding: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 6px rgba(237, 34, 93, 0.5);
    background: #d31f52;
  }
`;

const MoreInfo = styled.div`
  font-size: 1.3rem;
  text-align: center;
  color: #64748b;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  color: #64748b;
  line-height: 1;
  z-index: 2;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

  &:hover {
    color: #ed225d;
  }
`;

const SkipContainer = styled.button`
  align-self: flex-end;
  margin-top: auto;
  margin-bottom: 1rem;
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding-top: 2rem;

  &:hover {
    color: #ed225d;
  }
`;

export default function BannerMockup() {
  const [visible, setVisible] = useState(true);
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps } = useCollapse({
    isExpanded,
    duration: 1500,
    onCollapseEnd: () => setVisible(false)
  });
  const [selectedInterval, setSelectedInterval] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(10);

  const amounts = [5, 10, 25, 55];

  const closeBanner = () => setExpanded(false);

  if (!visible) return null;

  return (
    <div {...getCollapseProps()}>
      <Banner>
        <CloseButton onClick={closeBanner}>&times;</CloseButton>
        <Container>
          <DarkSideBar />
          <CallToAction>
            <h1>👋 😄 Keep p5.js Awesome (and Private)</h1>
            <p>
              <strong>Private sketches are coming to p5.js!</strong> Soon you’ll
              be able to keep your work-in-progress just that: private. Whether
              you’re a student trying things out, a teacher setting up lessons,
              or an artist prototyping your next big idea, you’ll be able to
              sketch on your own terms before sharing with the world.
            </p>
            <p>
              But features like this don’t build themselves. If every caring
              p5.js creator chips in the cost of a coffee each month, we’ll be
              able to keep building:
            </p>
            <ul>
              <li>✏️ Student and teacher-friendly features</li>
              <li>♿ Accessibility tools for all users</li>
              <li>⚡ Faster, smoother performance</li>
              <li>
                💖 A creative coding platform that’s free and open forever
              </li>
            </ul>
            <p>
              p5.js cares about your data privacy. We don’t collect personal
              info like gender or birthdate. Learn more about our{' '}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
            <SkipContainer onClick={closeBanner}>
              ✔️ I already donated
            </SkipContainer>
          </CallToAction>

          <ChevronWrapper />

          <Action>
            <IntervalSelect>
              <Interval
                className={selectedInterval === 'onetime' ? 'active' : ''}
                onClick={() => setSelectedInterval('onetime')}
              >
                One-time
              </Interval>
              <Interval
                className={selectedInterval === 'monthly' ? 'active' : ''}
                onClick={() => setSelectedInterval('monthly')}
              >
                ⭐ Monthly
              </Interval>
            </IntervalSelect>

            <AmountSelect>
              {amounts.map((amt) => (
                <Amount
                  key={amt}
                  active={selectedAmount === amt}
                  onClick={() => setSelectedAmount(amt)}
                >
                  ${amt}
                </Amount>
              ))}
              <CustomAmount placeholder="Other amount" />
            </AmountSelect>

            <DonateButton>Donate Now – it takes 30 seconds!</DonateButton>
            <MoreInfo>
              $5 makes a difference. $55 makes our day. <br />
              Let’s keep creative coding open to all.
            </MoreInfo>
          </Action>
        </Container>
      </Banner>
    </div>
  );
}
