import { LottieHandler } from "../../../components/feedback";
import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  emptyMessage: string;
};

const GridList = <T extends { id?: number }>({
  emptyMessage,
  records,
  renderItem,
}: GridListProps<T>) => {
    console.log(records)
  const renderList =
    records.length > 0 ? (
     records.map((record, index) => (
        <Col
          xs={3}
      key={`${record.id}-${index}`}
          className=""
        >
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );
  return <Row>{renderList}</Row>;
};

export default GridList;