import styled from 'styled-components';
// import Button from '../components/common-components/Button/Button';
import { Modal } from '../components/common-components/Modal';
import { useState } from 'react';
import { Input } from '../components/common-components/Input/Input';
import {
  SelectFilter,
  expressionCategory,
} from '../components/common-components/SelectFilter/SelectFilter';

import { ResponsiveBullet } from '@nivo/bullet';
import { InstaItem } from '../components/sns/InstaItem';
import { InstaArchive } from '../components/sns/InstaArchive';
import { YoutubeArchive } from '../components/sns/YoutubeArchive';

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

      <InstaArchive />
      <YoutubeArchive />

      <div style={{ margin: '10px 30px' }}>
        <SelectFilter
          placeholder="표정 분석sss"
          filterData={expressionCategory}
        />
      </div>

      <div
        style={{
          width: '800px',
          height: '140px',
          border: '1px solid red',
        }}
      >
        <ResponsiveBullet
          data={[
            {
              id: '',
              ranges: [0, 5, 10, 15, 20, 25, 30],
              measures: [0],
            },
          ]}
          margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
          spacing={46}
          titleAlign="start"
          titleOffsetX={-70}
          rangeColors={[
            '#85A8DF',
            '#85A8DF',
            '#F6E69D',
            '#F6E69D',
            '#F6E69D',
            '#F6E69D',
          ]}
        />
      </div>

      {/* <div style={{ width: '800px', height: '500px', margin: '0 auto' }}>
        <ResponsiveBullet
          data={data}
          margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
          spacing={46}
          titleAlign="start"
          titleOffsetX={-70}
          measureSize={0.2}
        />
      </div> */}
      <div>
        {/* <Card title="검색량" subTitle="서브타이틀테스트트트트틑트트ㅡ">
          <div style={{ border: '1px solid red', textAlign: 'left' }}>
            hihi this area is content area hihi this area is content area hihi
            this area is content area hihi this area is content area hihi this
            area is content area hihi this area is content area
          </div>
        </Card> */}

        {/* <SimilarItem /> */}

        {/* <AdvertisementList data={dummyData} /> */}

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
