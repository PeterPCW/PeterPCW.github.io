import app

def test_skills_endpoint():
    response = app.app.test_client().get('/api/skills')
    assert response.status_code == 200
    assert response.get_json() == [
        {"id": 1, "name": "Frontend"},
        {"id": 2, "name": "Backend"},
        {"id": 3, "name": "a bit of DevOps"},
        {"id": 4, "name": "Testing"},
        {"id": 5, "name": "Scripting"},
        {"id": 6, "name": "Scoping"},
        {"id": 7, "name": "Documentation"},
        {"id": 8, "name": "Visualization"},
        {"id": 9, "name": "Communication"},
        {"id": 10, "name": "Adaptability"},
    ]