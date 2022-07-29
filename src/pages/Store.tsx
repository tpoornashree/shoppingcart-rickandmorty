import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"


export function Store() {
  return (
    <>
      <h1>The Rick And Morty Show Store</h1>
      <h3>Collect Your Favourite Character Cards now!</h3>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}