import { Row, Col, Card, Badge } from 'antd';
import Image from 'next/image';
import { imageLoader } from '@/utils/func';
import styles from '@/styles/home/product.module.less';

const Product = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { Meta } = Card;
  const imgUrl = 'http://cdn.wangdaoo.com/400x220.png';
  return (
    <Row gutter={[20, 24]} className={styles.produces}>
      {list.map((it, index) => {
        return (
          <Col key={index} span={8} className={styles.card__box}>
            <Badge.Ribbon text="Hot" color="red">
              <Card
                hoverable
                cover={
                  <Image
                    loader={imageLoader}
                    src={imgUrl}
                    width={400}
                    height={220}
                    alt="qrCode"
                  />
                }
              >
                <Meta
                  className={styles.card_meta}
                  title={
                    <div className={styles.card_title}>
                      桜色舞うころ，私はひとり
                    </div>
                  }
                  description={
                    <div className={styles.card_sub_title}>
                      あれから 二人（ふたり）は 旅立（たびた）ち 从那之后 我们各自踏上旅途。 3、时（とき）の 悪戯に（いたずらに） 彷徨（さまよ）い 在时间的作弄之中彷徨着。
                    </div>
                  }
                />
              </Card>
            </Badge.Ribbon>
          </Col>
        );
      })}
    </Row>
  );
};

export default Product;
