import { useState, useEffect } from 'react';
import { ListGroup, Card, Button, Form, CardGroup, ListGroupItem } from 'react-bootstrap';
import API from './API';

const AddBikes = ({ onAdd }) => {
  const [Brand, setBrand] = useState("");
  const [Model, setModel] = useState("");
  const [Price, setPrice] = useState("");
  const [bikeId, setBikeId] = useState(null);
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    refreshBikes();
  }, []);

  const refreshBikes = () => {
    API.get("/")
      .then((res) => {
        setBikes(res.data);
        // setBrand(res[0].Brand)
        // setModel(res[0].Model)
        // setPrice(res[0].Price)
        // setMovieId(res[0].id)
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { Brand, Model, Price };
    API.post("/", item).then(() => refreshBikes());
  };

  const onUpdate = (id) => {
    let item = { Brand, Model, Price };
    API.patch(`/${id}/`, item).then((res) => refreshBikes());
  };

  const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshBikes());
  };

  function selectBikes(id) {
    let item = bikes.filter((bike) => bike.id === id)[0];
    setBrand(item.Brand);
    setModel(item.Model);
    setPrice(item.Price);
    setBikeId(item.id);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Create New Bikes Data</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{bikeId}Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Brand"
                value={Brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicModel">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Model"
                value={Model}
                onChange={(e) => setModel(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price (IDR)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Price"
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(bikeId)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>    
        <div className="col-md-8 m">
          <ListGroup>
            <Card>
              <table className="table table-bordered table-hover">
              <caption>List of bikes data</caption>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Price (IDR)</th>
                    <th scope="col">Edit / Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {bikes.map((bike, index) => {
                    return (
                      <tr key={bike.id}>
                        <th scope="row">{bike.id}</th>
                        <td> {bike.Brand}</td>
                        <td>{bike.Model}</td>
                        <td>{bike.Price}</td>
                        <td>
                          <i
                            className="fa fa-pencil-square text-primary d-inline"
                            aria-hidden="true"
                            onClick={() => selectBikes(bike.id)}
                          ></i>
                          <i
                            className="fa fa-trash-o text-danger d-inline mx-3"
                            aria-hidden="true"
                            onClick={() => onDelete(bike.id)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </ListGroup>     
        </div>
      </div>
    </div>
  );
};

export default AddBikes;