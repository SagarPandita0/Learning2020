import { TestBed, async } from '@angular/core/testing';
import { PatientAppComponent } from './PatientApp.PatientAddComponent';

describe('PatientAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PatientAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PatientAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HospitalClient'`, () => {
    const fixture = TestBed.createComponent(PatientAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HospitalClient');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PatientAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('HospitalClient app is running!');
  });
});
