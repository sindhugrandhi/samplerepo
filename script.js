body {
    font-family: 'Poppins', Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #825CFF;
  }
  
  #content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    max-width: 700px;
    margin: auto;
  }
  
  .card {
    position: relative;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .card:hover img {
    transform: scale(1.05);
  }
  
  .card-content {
    padding: 15px;
  }
  
  .card-content h3 {
    font-size: 1.25em;
    margin: 0 0 10px;
    color: #333;
  }
  
  .card-content p {
    margin: 0;
    color: #777;
    font-size: 0.9em;
    line-height: 1.5;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  #loading {
    text-align: center;
    padding: 20px;
    font-size: 18px;
    color: #fff;
  }