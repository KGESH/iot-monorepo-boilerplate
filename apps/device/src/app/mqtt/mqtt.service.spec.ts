import { Test } from '@nestjs/testing';
import { MqttService } from './mqtt.service';
import { MQTT_TOKEN } from './enum';
import { Observable } from 'rxjs';

const mockBroker = {
  emit: (topic: string, payload: unknown): Observable<unknown> => {
    return new Observable<unknown>();
  },
  send: (topic: string, payload: unknown): Observable<unknown> => {
    return new Observable<unknown>();
  },
};

describe('MQTT Service', () => {
  let mqttService: MqttService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        MqttService,
        { provide: MQTT_TOKEN.DEVICE_BROKER, useValue: mockBroker },
      ],
    }).compile();

    mqttService = app.get<MqttService>(MqttService);
  });

  describe('MqttService', () => {
    it('should be define', () => {
      expect(mqttService).toBeDefined();
    });

    it('should be publish message', async () => {
      const publishResult = await mqttService.publish('topic', 'payload');
      expect(publishResult).toBeUndefined();
    });
  });
});
