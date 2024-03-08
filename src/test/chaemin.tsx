import styled from 'styled-components';
// import Button from '../components/common-components/Button/Button';
import { Card } from '../components/common-components/Card/Card';
import { Modal } from '../components/common-components/Modal';
import { useState } from 'react';
import { Input } from '../components/common-components/Input/Input';
import { AdvertisementItem } from '../components/advertisement/AdvertisementItem';
import {
  SelectFilter,
  expressionCategory,
} from '../components/common-components/SelectFilter/SelectFilter';

export const TestChaemin = () => {
  const [show, setShow] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* <div>hello world</div>
      <Button>hihihi</Button>
      <div>안녕하세요. 테스트 페이지입니다.</div>
      <div>안녕하세요. 테스트 페이지입니다.</div>
      <div>안녕하세요. 테스트 페이지입니다.</div>
      <div>안녕하세요. 테스트 페이지입니다.</div>
      <Button size="md" color="black">
        테스트버튼입니다
      </Button>
      <TestDiv>테스트인데볼드가될까요되네요</TestDiv>
      <div>이건 그냥 버전</div> */}
      <div style={{ margin: '10px 30px' }}>
        <SelectFilter placeholder="표정 분석" filterData={expressionCategory} />
      </div>

      <div>
        <Card title="검색량" subTitle="서브타이틀테스트트트트틑트트ㅡ">
          <div style={{ border: '1px solid red', textAlign: 'left' }}>
            hihi this area is content area hihi this area is content area hihi
            this area is content area hihi this area is content area hihi this
            area is content area hihi this area is content area
          </div>
        </Card>

        <AdvertisementItem
          title="difjaliejf"
          time={10}
          videoUrl="aliejfai"
          createdAt="2020-02-02"
          advertisementId={1}
          isArchived
        />

        <Input
          placeholder="검색어를 입력해주세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          size="lg"
          style={{ width: '500px' }}
        />
        <Input
          placeholder="검색어를 입력해주세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          size="sm"
          style={{ width: '400px' }}
        />

        <button onClick={() => setShow(true)}>modal open</button>
        <Modal open={show} onClose={() => setShow(false)}>
          {/* <Modal.Close onClick={() => console.log('hi')} /> */}
          {/* <Modal.Title>tititititle</Modal.Title> */}
          <Modal.Top onClick={() => setShow(false)} title="검색량" />
          <Modal.Body>
            <div>
              bodybodybodybodbodybbybodybodbbodbydoybodybodybodybodybodbydoyybodbydoy
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export const TestDiv = styled.div`
  font-weight: 700;
`;
