# Personal Portfolio mit Flask

Dieses Projekt ist ein persönliches Portfolio, das mit Flask erstellt wurde. Es enthält eine Kontaktformular-Funktion, die E-Mails über T-Online SMTP sendet.

## Projektstruktur

```
Personal Portfolio/
├── python_backend/
│   └── app.py
├── static/
│   ├── assets/
│   │   ├── Icons/
│   │   ├── img/
│   │   ├── favicon.ico
│   │   └── Lebenslauf(Aktualisieren!!!).pdf
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── scripts.js
├── templates/
│   └── index.html
├── .env
└── README.md
```

## Installation

1. Klone das Repository
2. Installiere die erforderlichen Pakete:
   ```
   pip install flask flask-mail python-dotenv
   ```
3. Konfiguriere die `.env`-Datei mit deinen E-Mail-Zugangsdaten:
   ```
   MAIL_USERNAME=deine-email@t-online.de
   MAIL_PASSWORD=dein-email-passwort
   MAIL_DEFAULT_SENDER=deine-email@t-online.de
   FLASK_SECRET_KEY=ein-sicherer-geheimschluessel
   ```

## Ausführung

1. Navigiere zum Projektverzeichnis
2. Starte die Flask-Anwendung:
   ```
   python python_backend/app.py
   ```
3. Öffne einen Webbrowser und gehe zu `http://127.0.0.1:5000/`

## Funktionen

- Responsive Portfolio-Website
- Kontaktformular mit E-Mail-Versand
- Anzeige von Projekten und Fähigkeiten
- Download-Link für Lebenslauf

## Technologien

- Flask (Backend)
- HTML/CSS/JavaScript (Frontend)
- Flask-Mail (E-Mail-Versand)
- Bootstrap (Responsive Design) 