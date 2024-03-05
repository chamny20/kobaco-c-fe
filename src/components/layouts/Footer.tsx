import footer1 from '../../assets/footer1.png';

const Footer = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div
        style={{
          width: 1920,
          height: 350,
          left: 0,
          top: 0,
          position: 'absolute',
          background: '#E6E6E6',
        }}
      />

      <div
        style={{
          left: 310,
          top: 181,
          position: 'absolute',
          color: '#7B7B7B',
          fontSize: 14,
          fontFamily: 'Pretendard',
          fontWeight: '400',
          whiteSpace: 'pre-line',
          wordWrap: 'break-word',
          width: '200px',
          textAlign: 'left',
        }}
      >
        {' '}
        주소: 서울시 중구 세종대로 124
        <br />
        담당부서: 지능 정보 사업팀
        <br />
        02)731-7350
        <br />
        이용문의: 카카오톡 kobaco AiSAC
      </div>

      <div
        style={{
          left: 1323,
          top: 231,
          position: 'absolute',
          textAlign: 'right',
          color: '#7B7B7B',
          fontSize: 14,
          fontFamily: 'Pretendard',
          fontWeight: '400',
          whiteSpace: 'pre-line',
          wordWrap: 'break-word',
          width: '300px',
        }}
      >
        Copyright(C) Korea Broadcast Advertising Corp.
        <br />
        All Rights Reserved
      </div>

      <div
        style={{
          width: 506,
          height: 25,
          left: 1105,
          top: 69,
          position: 'absolute',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 20,
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            color: '#373D49',
            fontSize: 14,
            fontFamily: 'Pretendard',
            fontWeight: '500',
            wordWrap: 'break-word',
          }}
        >
          AiSAC이란?
        </div>
        <div
          style={{ width: 0, height: 13.5, border: '1px #7B7B7B solid' }}
        ></div>
        <div
          style={{
            color: '#373D49',
            fontSize: 14,
            fontFamily: 'Pretendard',
            fontWeight: '500',
            wordWrap: 'break-word',
          }}
        >
          서비스 이용약관
        </div>
        <div
          style={{ width: 0, height: 13.5, border: '1px #7B7B7B solid' }}
        ></div>
        <div
          style={{
            color: '#373D49',
            fontSize: 14,
            fontFamily: 'Pretendard',
            fontWeight: '500',
            wordWrap: 'break-word',
          }}
        >
          개인정보 처리방침
        </div>
        <div
          style={{ width: 0, height: 13.5, border: '1px #7B7B7B solid' }}
        ></div>
        <div
          style={{
            color: '#373D49',
            fontSize: 14,
            fontFamily: 'Pretendard',
            fontWeight: '500',
            wordWrap: 'break-word',
          }}
        >
          이메일 무단수집 거부
        </div>
      </div>

      <img
        style={{
          width: 350,
          height: 61,
          left: 310,
          top: 69,
          position: 'absolute',
        }}
        src={footer1}
      />
    </div>
  );
};

export default Footer;
